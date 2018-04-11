import React from 'react';
import {GridRow, Segment, GridColumn, Grid, Icon} from 'semantic-ui-react';

const Footer = () => (
    <div className="footer">
        <Grid columns='equal' divided inverted padded>
            <GridRow color='black' textAlign='center'>
                <GridColumn>
                    <Segment color='black' inverted>
                        <a href={'https://github.com/Randyjp'} target={'_blank'} rel={'noopener noreferrer'}>
                            <Icon name={'github'} size={'big'} link/>
                        </a>
                    </Segment>
                </GridColumn>
                <GridColumn>
                    <Segment color='black' inverted>
                        <a href={'linkedin.com/in/randyperez/'} target={'_blank'} rel={'noopener noreferrer'}>
                            <Icon name={'twitter'} size={'big'} link/>
                        </a>
                    </Segment>
                </GridColumn>
                <GridColumn>
                    <Segment color='black' inverted>
                        <a href={'https://twitter.com/Randy_Perez'} target={'_blank'} rel={'noopener noreferrer'}>
                            <Icon name={'linkedin'} size={'big'} link/>
                        </a>
                    </Segment>
                </GridColumn>
            </GridRow>
        </Grid>
    </div>
);

export default Footer;
