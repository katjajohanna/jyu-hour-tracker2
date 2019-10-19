/**
 * This is a dummy handler for CloudWatch alarms.
 *
 * It would be better to subscribe an email or
 * incident management software to the topic where
 * CloudWatch sends the alarms.
 */
module.exports.handler = ((event, context) => {
    const subject = event.Records[0].Sns.Subject
    const message = JSON.parse(event.Records[0].Sns.Message)

    const {
        AlarmName,
        AlarmDescription,
        NewStateValue,
        OldStateValue,
        NewStateReason,
        StateChangeTime,
        Trigger: {
            MetricName,
            Namespace,
            Statistic,
            Period
        }
    } = message

    const details = {
        AlarmName,
        AlarmDescription,
        NewStateValue,
        OldStateValue,
        NewStateReason,
        StateChangeTime,
        Trigger: {
            MetricName,
            Namespace,
            Statistic,
            Period
        }
    }

    console.log('New alarm', subject)
    console.log(details)

    context.done(null)
})