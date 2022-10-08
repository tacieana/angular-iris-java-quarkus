package shift.hackathon.demo.repository;

import javax.enterprise.context.ApplicationScoped;

import shift.hackathon.demo.entity.ServiceOrder;

import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;

@ApplicationScoped
public class ServiceOrderRepository implements PanacheRepositoryBase<ServiceOrder, Long> {

}
