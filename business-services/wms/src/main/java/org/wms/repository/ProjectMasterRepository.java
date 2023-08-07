package org.wms.repository;

//import org.wms.repository.querybuilder.SchemeQueryBuilder;
//import org.wms.repository.rowmapper.BirthApplicationRowMapper;
import org.wms.web.models.Project;
//import org.wms.web.models.BirthApplicationSearchCriteria;
//import org.wms.web.models.BirthRegistrationApplication;
import org.wms.web.models.Scheme;
import org.wms.web.models.SchemeCreationApplication;
//import org.wms.web.models.SchemeCreationRequest;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Slf4j
@Repository
public class ProjectMasterRepository {

    

    @Autowired
    private JdbcTemplate jdbcTemplate;

    

    public List<Project> searchProject(String keyword){
    	//String sql = "SELECT * FROM Scheme_Master WHERE (name_en LIKE ? OR name_reg LIKE ?)";
    	String sql = "SELECT * FROM Project_Master WHERE Project_Name_En LIKE ? OR Project_Name_Reg LIKE ?";
        
        //String keywordWithWildcards = "%" + keyword + "%";

        return jdbcTemplate.query(sql, new Object[]{keyword, keyword}, new BeanPropertyRowMapper<>(Project.class));
    }

	public Project save(Project project) {
		// TODO Auto-generated method stub
		
        //jdbcTemplate.update(sql, schemeRequest.getSourceOfFund(), schemeRequest.getStartDate(), schemeRequest.getEndDate(),schemeRequest.getSchemeNameEn(),schemeRequest.getSchemeNameReg(),schemeRequest.getFund(),schemeRequest.getSchemeDescription(),schemeRequest.getUploadDocument());
		
        String sql = "INSERT INTO \"Project_Master\" (\r\n"
        		+ "    \"Project_Number\",\r\n"
        		+ "    \"Project_Name_En\",\r\n"
        		+ "    \"Project_Name_Reg\",\r\n"
        		+ "    \"Project_Description\",\r\n"
        		+ "    \"Project_Timeline\",\r\n"
        		+ "    \"Project_Start_Date\",\r\n"
        		+ "    \"Project_End_Date\",\r\n"
        		+ "    \"Scheme_Name\",\r\n"
        		+ "    \"Approval_Number\",\r\n"
        		+ "    \"Approval_Date\",\r\n"
        		+ "    \"Status\"\r\n"
        		+ ") VALUES ( (?, ?, ?,?,?,?,?,?,?,?,?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, project.getProjectNumber());
            ps.setString(2, project.getProjectNameEn());
            ps.setString(3, project.getProjectNameReg());
            ps.setString(4, project.getProjectDescription());
            ps.setString(5, project.getProjectTimeline());
            
            ps.setDate(6, Date.valueOf(project.getProjectStartDate()));
            ps.setDate(7, Date.valueOf(project.getProjectEndDate()));
            
            ps.setString(8, project.getSchemeName());
            ps.setString(9, project.getApprovalNumber());
            ps.setDate(10, Date.valueOf(project.getApprovalDate()));
            ps.setString(11, project.getStatus());
            
            return ps;
        }, keyHolder);

        project.setProjectId(keyHolder.getKey().longValue());
        return project;
	}

	public boolean updateProject(Project project) {
		
		String sql = "UPDATE Project_Master SET Project_Name_En = ?, Project_Name_Reg = ? WHERE Project_ID = ?";

        // Use JdbcTemplate to execute the update query with the required parameters
        int rowsAffected = jdbcTemplate.update(sql, project.getProjectNameEn(), project.getProjectNameReg(), project.getProjectId());

        // If the number of affected rows is greater than 0, the update was successful
        return rowsAffected > 0;
		
		
	}

	/*
	 * public Optional<Scheme> findById(Long id) { String sql =
	 * "SELECT * FROM Scheme_Master WHERE id = ?";
	 * 
	 * // Use JdbcTemplate to execute the query and retrieve the scheme by ID Scheme
	 * scheme = jdbcTemplate.queryForObject(sql, new Object[]{id}, new
	 * BeanPropertyRowMapper<>(Scheme.class));
	 * 
	 * // Wrap the result in an Optional to handle null values return
	 * Optional.ofNullable(scheme); }
	 */
	
	// Method to retrieve all schemes
    public List<Project> getAllProjects() {
        String sql = "SELECT * FROM Project_Master";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Project.class));
    }
    
 // Method to retrieve a scheme by ID
    public Project getProjectById(Long id) {
        String sql = "SELECT * FROM Project_Master WHERE Project_ID = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{id}, new BeanPropertyRowMapper<>(Project.class));
    }
	
	
}