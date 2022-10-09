package shift.hackathon.demo.controller;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.eclipse.microprofile.openapi.annotations.parameters.RequestBody;

import shift.hackathon.demo.entity.Client;
import shift.hackathon.demo.service.ClientService;

@Path("/api/client")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ClientController {
    private final ClientService clientService;
	
	public ClientController(ClientService clientService) {
		this.clientService = clientService;
	}

	@POST
	public Response createClient(@RequestBody Client client) {
		clientService.create(client);
		return Response.status(Status.CREATED).entity(client).build();
	}
	
	@GET
	public Response listAllClients() {
		List<Client> listClients = clientService.findAll();
		return Response.status(Status.OK).entity(listClients).build();
	}
	
	@GET
	@Path("/{id}")
	public Response findClientById(@PathParam("id") Long id) {
		Client findClient = clientService.findOne(id).get();
		return Response.status(Status.OK).entity(findClient).build();
	}
	
	@PUT
	@Path("/{id}")
	public Response updateClient(@PathParam("id") Long id, @RequestBody Client client ) {
		Client updatingClient = clientService.update(id, client);
		return Response.status(Status.OK).entity(updatingClient).build();
	}
	
	@DELETE
	@Path("/{id}")
	public Response deleteClientById(@PathParam("id") Long id) {
		clientService.delete(id);
		return Response.status(Status.NO_CONTENT).build();
	}

}
