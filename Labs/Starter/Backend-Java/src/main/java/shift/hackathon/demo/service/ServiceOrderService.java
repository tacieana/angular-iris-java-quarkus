package shift.hackathon.demo.service;

import java.util.List;
import java.util.Optional;

import shift.hackathon.demo.entity.ServiceOrder;

public interface ServiceOrderService {

	ServiceOrder create(ServiceOrder serviceOrder);

	ServiceOrder update(ServiceOrder serviceOrder);

	List<ServiceOrder> findAll(ServiceOrder serviceOrder);

	Optional<ServiceOrder> findOne(Long id);

	void delete(Long id);

}
