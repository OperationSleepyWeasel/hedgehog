package com.sleepyweasel.hedgehog.base

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ContextConfiguration
import org.springframework.test.context.web.WebAppConfiguration
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.setup.ConfigurableMockMvcBuilder
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import org.springframework.web.context.WebApplicationContext
import spock.lang.Specification

@ContextConfiguration
@SpringBootTest
@WebAppConfiguration
class IntegrationSpec extends Specification {

    @Autowired
    WebApplicationContext webApplicationContext

    MockMvc mockMvc

    def setup() {
        ConfigurableMockMvcBuilder mockMvcBuilder = MockMvcBuilders.webAppContextSetup(webApplicationContext)
        mockMvc = mockMvcBuilder.build()
    }
}
