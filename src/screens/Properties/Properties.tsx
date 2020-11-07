import React from 'react';
import { FlatList, ScrollView, Text } from 'react-native';

import Loading from '../../components/Loading/Loading';
import Preview from '../../components/Preview/Preview';
import { logger } from '../../utils/logger';

interface PropProps {
  navigation: object;
  data: any;
  error: any;
  loading: boolean;
  listProperties: Function;
}

export default class Properties extends React.Component<PropProps> {
  async componentDidMount() {
    this.props.listProperties();
  }

  renderItem = ({ item }: any) => <Preview item={item} />;

  render(): any {
    const { error, loading, data } = this.props;

    if (loading || !data) {
      return <Loading />;
    }
    if (error) {
      logger.error('Error loading properties data', error);
    }

    return (
      <ScrollView>
        <FlatList
          data={data.data}
          keyExtractor={(item: any) => `${item.id}`}
          ListEmptyComponent={<Text>No properties found</Text>}
          renderItem={this.renderItem}
        />
      </ScrollView>
    );
  }
}
