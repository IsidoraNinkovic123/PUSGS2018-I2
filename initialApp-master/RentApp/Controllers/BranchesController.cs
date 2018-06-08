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
    public class BranchesController : ApiController
    {
        private readonly IUnitOfWork unitOfWork;

        public ISecureDataFormat<AuthenticationTicket> AccessTokenFormat { get; private set; }
        public BranchesController(IUnitOfWork unitOfWork, ApplicationUserManager userManager,
            ISecureDataFormat<AuthenticationTicket> accessTokenFormat)
        {
            this.unitOfWork = unitOfWork;
            AccessTokenFormat = accessTokenFormat;
        }

        // GET: api/Branches
        public IEnumerable<Branch> GetBranches()
        {
            return unitOfWork.Branches.GetAll();
        }

        // GET: api/Branches/5
       // [HostAuthentication(DefaultAuthenticationTypes.ExternalBearer)]
        [ResponseType(typeof(Branch))]
        public IHttpActionResult GetBranch(int id)
        {
            Branch branch = unitOfWork.Branches.Get(id);
            if (branch == null)
            {
                return NotFound();
            }

            return Ok(branch);
        }

        // PUT: api/Branches/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBranch(int id, Branch branch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != branch.Id)
            {
                return BadRequest();
            }

            try
            {
                unitOfWork.Branches.Update(branch);
                unitOfWork.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BranchExists(id))
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

        // POST: api/Branches
        [ResponseType(typeof(Branch))]
        public IHttpActionResult PostBranch(Branch branch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            unitOfWork.Branches.Add(branch);
            unitOfWork.Complete();

            return CreatedAtRoute("DefaultApi", new { id = branch.Id }, branch);
        }

        // DELETE: api/Branches/5
        [ResponseType(typeof(Branch))]
        public IHttpActionResult DeleteBranch(int id)
        {
            Branch branch = unitOfWork.Branches.Get(id);
            if (branch == null)
            {
                return NotFound();
            }

            unitOfWork.Branches.Remove(branch);
            unitOfWork.Complete();

            return Ok(branch);
        }

        private bool BranchExists(int id)
        {
            return unitOfWork.Branches.Get(id) != null;
        }
    }
}