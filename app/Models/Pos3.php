<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pos3 extends Model
{
    use HasFactory;

    protected $table = 'pos3';

    public $timestamps = false;

    protected $fillable = [
        'id',
        'jawaban',
    ];
}
