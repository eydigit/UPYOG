package org.egov.repository;

import java.util.ArrayList;
import java.util.List;

import org.egov.repository.querybuilder.SORApplicationQueryBuilder;
import org.egov.repository.querybuilder.WMSWorkApplicationQueryBuilder;
import org.egov.repository.rowmapper.SORApplicationRowMapper;
import org.egov.repository.rowmapper.WMSWorkApplicationRowMapper;
import org.egov.web.models.SORApplicationSearchCriteria;
import org.egov.web.models.ScheduleOfRateApplication;
import org.egov.web.models.WMSWorkApplication;
import org.egov.web.models.WMSWorkApplicationSearchCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Repository
public class WMSWorkRepository {
	
	@Autowired
    private WMSWorkApplicationQueryBuilder queryBuilder;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private WMSWorkApplicationRowMapper rowMapper;

    public List<WMSWorkApplication>getApplications(WMSWorkApplicationSearchCriteria searchCriteria){
        List<Object> preparedStmtList = new ArrayList<>();
        String query = queryBuilder.getWorkApplicationSearchQuery(searchCriteria, preparedStmtList);
        log.info("Final query: " + query);
        return jdbcTemplate.query(query,  rowMapper,preparedStmtList.toArray());
    }

}