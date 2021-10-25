<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    public function role(){
        return $this->belongsTo('App\Role');
    }

    public function vacationEmployees(){
        return $this->hasMany('App\Vacation');
    }

    public function vacationEmployers(){
        return $this->hasMany('App\Vacation');
    }
}
