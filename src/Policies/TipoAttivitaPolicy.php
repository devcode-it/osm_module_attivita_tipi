<?php /** @noinspection PhpUnusedParameterInspection */

namespace Openstamanager\TipiAttivita\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Openstamanager\TipiAttivita\Models\TipoAttivita;

class TipoAttivitaPolicy
{
    use HandlesAuthorization;

    public function allowRestify(?User $user = null): bool
    {
        return true;
    }

    public function show(User $user, TipoAttivita $model): bool
    {
        return true;
    }

    public function store(User $user): bool
    {
        return true;
    }

    public function storeBulk(User $user): bool
    {
        return true;
    }

    public function update(User $user, TipoAttivita $model): bool
    {
        return true;
    }

    public function updateBulk(User $user, TipoAttivita $model): bool
    {
        return true;
    }

    public function delete(User $user, TipoAttivita $model): bool
    {
        return true;
    }

    public function restore(User $user, TipoAttivita $model): bool
    {
        return true;
    }

    public function forceDelete(User $user, TipoAttivita $model): bool
    {
        return true;
    }
}
