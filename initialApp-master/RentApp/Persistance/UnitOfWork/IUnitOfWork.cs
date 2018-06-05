using RentApp.Persistance.Repository;
using System;

namespace RepoDemo.Persistance.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IServiceRepository Services { get; set; }
        IAppUserRepository AppUsers { get; set; }
        IBranchRepository Branches { get; set; }
        IRentRepository Rents { get; set; }
        ITypeOfVehicleRepository TypeOfVehicles { get; set; }
        IVehicleRepository Vehicles { get; set; }

        int Complete();
    }
}
