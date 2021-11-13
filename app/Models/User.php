<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    public function role(){
        return $this->belongsTo('App\Models\Role');
    }

    public function vacationEmployees(){
        return $this->hasMany('App\Models\Vacation','employee_id');
    }

    public function vacationEmployers(){
        return $this->hasMany('App\Models\Vacation');
    }
}
