package com.aakanksha.hirehive.service;

import java.util.List;

import com.aakanksha.hirehive.exception.ApplicationNotFoundException;
import com.aakanksha.hirehive.repository.CompanyApplicationRepository;
import com.aakanksha.hirehive.entity.CompanyApplication;
import org.springframework.stereotype.Service;

@Service
public class CompanyApplicationService {

    private final CompanyApplicationRepository repository;

    public CompanyApplicationService(
            CompanyApplicationRepository repository) {

        this.repository = repository;
    }

    public CompanyApplication saveApplication(
            CompanyApplication application) {

        return repository.save(application);
    }

    public List<CompanyApplication> getApplications() {
        return repository.findAll();
    }
    public CompanyApplication getApplicationById(Long id){
        return repository.findById(id).orElseThrow(()->new ApplicationNotFoundException("Company Application not found"));
    }
    public CompanyApplication updateApplication(Long id,CompanyApplication application)
    {
        CompanyApplication existingApplication=getApplicationById(id);
        existingApplication.setCompanyName(application.getCompanyName());
        existingApplication.setRole(application.getRole());
        existingApplication.setPackageOffered(application.getPackageOffered());
        existingApplication.setApplicationStatus(application.getApplicationStatus());
        existingApplication.setNotes(application.getNotes());
        return repository.save(existingApplication);
    }
    public void deleteApplication(Long id){
        CompanyApplication application=getApplicationById(id);
        repository.delete(application);
    }
    public List<CompanyApplication> getApplicationsByCompanyName(String companyName)
    {
        return repository.findByCompanyName(companyName);
    }
}