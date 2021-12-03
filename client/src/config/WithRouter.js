import { useParams } from 'react-router';
import UpdateWellInfo from '../pages/UpdateWellInfo'

const withRouter = UpdateWellInfo => props => {
    const params = useParams();

  
    return (
      <UpdateWellInfo
        {...props}
        params={params}
      />
    );
  };

export default withRouter(UpdateWellInfo);