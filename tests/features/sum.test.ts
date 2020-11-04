import {sum} from '../../src/framework/sum';
import {Reporter, Severity} from 'jest-allure/dist/Reporter';

declare let reporter: Reporter;

describe('Sum test', () => {

    test('basic',  async() => {
        reporter
            .description("Feature should not work cool")
            .severity(Severity.Critical)
            .story("BOND-007");

        reporter.startStep("Check it's fancy");
        expect(sum()).toBe(0);
        reporter.endStep();
    });

    test('basic again', async () => {
        reporter
            .description("Feature should work cool")
            .severity(Severity.Normal)
            .story("BOND-008");

        reporter.startStep("Check it is not fancy");
        expect(sum(1, 2)).toBe(3);
        reporter.endStep();
    });
});
