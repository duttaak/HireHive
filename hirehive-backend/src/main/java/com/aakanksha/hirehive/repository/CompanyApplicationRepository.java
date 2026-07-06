package com.aakanksha.hirehive.repository;

import java.util.List;
import com.aakanksha.hirehive.entity.CompanyApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyApplicationRepository
        extends JpaRepository<CompanyApplication, Long> {
    List<CompanyApplication> findByCompanyName(String companyName);
}
