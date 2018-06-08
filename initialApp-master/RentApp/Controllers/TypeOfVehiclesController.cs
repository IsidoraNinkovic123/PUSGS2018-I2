using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using RentApp.Models.Entities;
using RepoDemo.Persistance.UnitOfWork;
using Microsoft.Owin.Security;
using Microsoft.AspNet.Identity;

namespace RentApp.Controllers
{
    public class TypeOfVehiclesController : ApiController
    {
        private readonly IUnitOfWork unitOfWork;
        public ISecureDataFormat<AuthenticationTicket> AccessTokenFormat { get; private set; }

        public TypeOfVehiclesController(IUnitOfWork unitOfWork, ApplicationUserManager userManager,
            ISecureDataFormat<AuthenticationTicket> accessTokenFormat)
        {
            this.unitOfWork = unitOfWork;
            AccessTokenFormat = accessTokenFormat;
        }

        // GET: api/TypeOfVehicles
        public IEnumerable<TypeOfVehicle> GetTypeOfVehicles()
        {
            return unitOfWork.TypeOfVehicles.GetAll();
        }

        // GET: api/TypeOfVehicles/5
        //[HostAuthentication(DefaultAuthenticationTypes.ExternalBearer)]
        [ResponseType(typeof(TypeOfVehicle))]
        public IHttpActionResult GetTypeOfVehicle(int id)
        {
            TypeOfVehicle typeOfVehicle = unitOfWork.TypeOfVehicles.Get(id);
            if (typeOfVehicle == null)
            {
                return NotFound();
            }

            return Ok(typeOfVehicle);
        }

        // PUT: api/TypeOfVehicles/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTypeOfVehicle(int id, TypeOfVehicle typeOfVehicle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != typeOfVehicle.Id)
            {
                return BadRequest();
            }

            try
            {
                unitOfWork.TypeOfVehicles.Update(typeOfVehicle);
                unitOfWork.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TypeOfVehicleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/TypeOfVehicles
        [ResponseType(typeof(TypeOfVehicle))]
        public IHttpActionResult PostTypeOfVehicle(TypeOfVehicle typeOfVehicle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            unitOfWork.TypeOfVehicles.Add(typeOfVehicle);
            unitOfWork.Complete();

            return CreatedAtRoute("DefaultApi", new { id = typeOfVehicle.Id }, typeOfVehicle);
        }

        // DELETE: api/TypeOfVehicles/5
        [ResponseType(typeof(TypeOfVehicle))]
        public IHttpActionResult DeleteTypeOfVehicle(int id)
        {
            TypeOfVehicle typeOfVehicle = unitOfWork.TypeOfVehicles.Get(id);
            if (typeOfVehicle == null)
            {
                return NotFound();
            }

            unitOfWork.TypeOfVehicles.Remove(typeOfVehicle);
            unitOfWork.Complete();

            return Ok(typeOfVehicle);
        }

        private bool TypeOfVehicleExists(int id)
        {
            return unitOfWork.TypeOfVehicles.Get(id) != null;
        }
    }
}