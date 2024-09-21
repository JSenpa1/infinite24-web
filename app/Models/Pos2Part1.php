<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pos2Part1 extends Model
{
    use HasFactory;

    protected $table = 'pos2_part1';

    public $timestamps = false;

    protected $fillable = [
        'id',
        'jawaban',
    ];
}
