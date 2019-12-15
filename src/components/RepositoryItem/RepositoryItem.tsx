import React, { ReactElement } from 'react';
import { Repository } from '../../redux/ducks/repositories/types';

interface OwnProps {
  repository: Repository
}

export default function RepositoryItem({ repository }: OwnProps): ReactElement {
  return (<li>{repository.name}</li>);
}
