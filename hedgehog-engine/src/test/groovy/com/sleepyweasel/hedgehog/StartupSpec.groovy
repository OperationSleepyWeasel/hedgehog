package com.sleepyweasel.hedgehog

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.context.ApplicationContext
import org.springframework.test.context.ContextConfiguration
import spock.lang.Specification

@ContextConfiguration
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class StartupSpec extends Specification {

    @Autowired
    ApplicationContext context

    def "application context should get up"() {
        expect: "web application context exists"
        context != null
    }
}
