<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GroupCode extends Model
{
    use HasFactory;

    protected $table = 'group_codes';

    public $timestamps = false;

    protected $fillable = [
        'id',
        'kode_grup',
    ];
}
