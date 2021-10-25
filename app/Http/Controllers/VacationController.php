<?php

namespace App\Http\Controllers;

use App\Models\Vacation;
use Illuminate\Http\Request;

class VacationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Vacation::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'start_date' => 'required',
            'end_date' => 'required',
            'approved' => 'required',
            'approved_date' => 'required',
            'employee_id' => 'required',
            'employer_id' => 'required'
        ]);

        $vacation = new Vacation();
        $vacation->start_date = $request->input('start_dates');
        $vacation->end_date = $request->input('end_date');
        $vacation->approved = $request->input('approved');
        $vacation->approved_date = $request->input('approved_date');
        $vacation->employee_id = $request->input('employee_id');
        $vacation->employer_id = $request->input('employer_id');

        $vacation->save();

        return response()->json([
            'message' => 'Vacation created',
            'vacation' => $vacation
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vacation  $vacation
     * @return \Illuminate\Http\Response
     */
    public function show(Vacation $vacation)
    {
        return $vacation;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Vacation  $vacation
     * @return \Illuminate\Http\Response
     */
    public function edit(Vacation $vacation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Vacation  $vacation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vacation $vacation)
    {
        $request->validate([
            'start_date' => 'required',
            'end_date' => 'required',
            'approved' => 'required',
            'approved_date' => 'required',
            'employee_id' => 'required',
            'employer_id' => 'required'
        ]);

        $vacation->start_date = $request->input('start_dates');
        $vacation->end_date = $request->input('end_date');
        $vacation->approved = $request->input('approved');
        $vacation->approved_date = $request->input('approved_date');
        $vacation->employee_id = $request->input('employee_id');
        $vacation->employer_id = $request->input('employer_id');

        $vacation->save();

        return response()->json([
            'message' => 'Vacation updated',
            'vacation' => $vacation
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vacation  $vacation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vacation $vacation)
    {
        $vacation->delete();
        return response()->json([
            'message' => 'Successfully deleted vacation!'
        ]);
    }
}
