<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vacation extends Model
{
    use HasFactory;

    public function employee(){
        return $this->belongsTo('App\User');
    }

    public function employer(){
        return $this->belongsTo('App\User');
    }
}
