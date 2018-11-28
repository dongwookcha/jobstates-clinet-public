import React, { Component } from 'react';
import {
  Grid,
  Button,
  Image,
  List,
  Form,
  Input,
  Container,
  Header,
  Label,
} from 'semantic-ui-react';
import * as jobUtils from 'utils/jobutils';
import DropdownSearchQuery from 'components/job/post/DropdownSearchQuery';

class JobCompany extends Component {
  state = {
    edit: false,
    companyId: this.props.companyId || null,
    logo: this.props.logo || null,
    brand: this.props.brand || null,
    companyUrl: this.props.companyUrl || null,
    intro: this.props.intro || null,
    category: this.props.category || null,
  };

  onEditing = () => this.setState({ edit: !this.state.edit });

  onHandleChange = key => e =>
    this.setState({
      ...this.state,
      [key]: e.target.value ? e.target.value : e.target.innerText,
    });

  onHandleGetArray = key => data =>
    this.setState({
      ...this.state,
      [key]: data,
    });

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ edit: !this.state.edit });
  // }

  render() {
    const {
      edit,
      logo,
      brand,
      companyUrl,
      intro,
      category,
      // status,
    } = this.state;
    const { onSubmitEditData } = this.props;
    const hireMapping = category => <div className="mapping">{category}</div>;

    return (
      <Container className="jobContainer">
        <Grid textAlign="center">
          <Grid.Row>
            <Grid.Column width={2}>
              <Header>회사</Header>
            </Grid.Column>
            {!edit ? (
              <Grid.Column textAlign="left" width={10} className="jobbody">
                <div className="ItemsInContainer">
                  <Grid padded="vertically horizontally">
                    <Grid.Row>
                      <Grid.Column width={4}>
                        <Image src={logo} avatar />
                      </Grid.Column>
                      <Grid.Column textAlign="center" width={8}>
                        <Header>{this.props.brand}</Header>
                      </Grid.Column>
                      {/* <Grid.Column width={4} /> */}
                      <Grid.Column width={4} textAlign="right">
                        <span className="linkBtn">
                          <a href={this.props.companyUrl}>
                            <img
                              src="https://png.pngtree.com/svg/20170904/url_650529.png"
                              height="30px"
                            />
                          </a>
                        </span>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row textAlign="left">
                      <List bulleted>
                        <List.Item className="jobpostItem">회사소개</List.Item>
                        {this.props.intro}
                      </List>
                    </Grid.Row>
                    <Grid.Row>
                      <List bulleted>
                        <List.Item className="jobpostItem">산업분야</List.Item>
                      </List>
                    </Grid.Row>
                    {this.props.category.map(hireMapping)}
                  </Grid>
                </div>
              </Grid.Column>
            ) : (
              <Grid.Column textAlign="left" width={10} className="jobbody">
                <Grid.Row>
                  <Form>
                    <Grid.Row>
                      <div class="ItemsInContainer">
                        <Form.Field>
                          <List bulleted>
                            <List.Item className="jobpostItem">
                              회사명
                            </List.Item>
                            <Input
                              value={brand}
                              onChange={this.onHandleChange('brand')}
                            />
                          </List>
                        </Form.Field>
                      </div>
                    </Grid.Row>
                    <Grid.Row>
                      <div class="ItemsInContainer">
                        <Form.Field>
                          <List bulleted>
                            <List.Item className="jobpostItem">
                              회사 로고
                            </List.Item>
                            <Input control={Input} type="file" />
                          </List>
                        </Form.Field>
                      </div>
                    </Grid.Row>

                    <Grid.Row>
                      <div class="ItemsInContainer">
                        <Form.Field>
                          <List bulleted>
                            <List.Item className="jobpostItem">
                              회사 사이트
                            </List.Item>
                            <Input
                              onChange={this.onHandleChange('companyUrl')}
                              value={companyUrl}
                            />
                          </List>
                        </Form.Field>
                      </div>
                    </Grid.Row>
                    <Grid.Row />

                    <Grid.Row>
                      <div class="ItemsInContainer">
                        <Form.Field>
                          <List bulleted>
                            <List.Item className="jobpostItem">
                              회사 소개
                            </List.Item>
                            <Input
                              onChange={this.onHandleChange('intro')}
                              value={intro}
                            />
                          </List>
                        </Form.Field>
                      </div>
                    </Grid.Row>
                    <Grid.Row />

                    <Grid.Row>
                      <div class="ItemsInContainer">
                        <List bulleted>
                          <List.Item className="jobpostItem">
                            산업 분야
                          </List.Item>
                          <DropdownSearchQuery
                            stateOptions={jobUtils.selectCategory}
                            title={'산업 분야'}
                            handleArrayChange={this.onHandleGetArray(
                              'category',
                            )}
                            value={category}
                          />
                        </List>
                      </div>
                    </Grid.Row>
                    <Grid textAlign="center">
                      <Grid.Row>
                        <div class="ItemsInContainer">
                          <Button compact onClick={this.onEditing}>
                            취소
                          </Button>
                          <Button
                            compact
                            onClick={() => {
                              onSubmitEditData(this.state, 'company');
                              this.onEditing();
                            }}
                          >
                            변경
                          </Button>
                        </div>
                      </Grid.Row>
                    </Grid>
                  </Form>
                </Grid.Row>
              </Grid.Column>
            )}
            <Grid.Column width={2} textAlign="left">
              <Button basic icon="edit" onClick={this.onEditing} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default JobCompany;
