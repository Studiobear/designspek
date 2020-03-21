<script>
  import { Card, CardHead, CardBody } from '../../Card'

  export let styleCard = {}
  export let styleCardHead = {}
  export let styleCardBody = {}
  export let cardTitle = 'I am a Card...'
  export let cardBody = '...and this is my body'
</script>

<Card style={styleCard}>
  <CardHead style={styleCardHead}>{cardTitle}</CardHead>
  <CardBody style={styleCardBody}>{cardBody}</CardBody>
</Card>
