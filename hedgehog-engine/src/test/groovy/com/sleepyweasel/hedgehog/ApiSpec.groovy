package com.sleepyweasel.hedgehog

import com.sleepyweasel.hedgehog.base.IntegrationSpec

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

class ApiSpec extends IntegrationSpec {

    def "should connect to API"() {
        when:
        def response = mockMvc.perform(get("/api/status"))

        then:
        response.andExpect(status().isOk())
                .andExpect(content().string("Connection successful"))
    }
}
