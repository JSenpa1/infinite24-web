<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pos2Part2 extends Model
{
    use HasFactory;

    protected $table = 'pos2_part2';

    public $timestamps = false;

    protected $fillable = [
        'id',
        'jawaban',
    ];
}
