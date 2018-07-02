import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: '17rem',
    backgroundColor: '#bdd2f9',
    color: '#36384c',
    paddingLeft: '8px',
    paddingRight: '8px',
  },
  input: {
    display: 'none',
  },
});

class AnsBut extends React.Component {

  handleClick1 = () => {
    this.props.handleClick2(this.props.pageNum);
  }

  render() {
    const { classes } = this.props;

    const option_one = ['Enjoying a fruity drink and an ocean breeze', 'Walking through a serene garden in full bloom',
    'Tasting exotic cuisines and decadent desserts', 'Adventuring off the grid and deep into nature'];
    const option_two = ['Fly on the wall', 'The life of the party', 'Deep converser', 'Nah, I\'d stay at home'];
    const option_three = ['Nice and friendly', 'Intelligent and wise', 'Candid and open', 'Warm and caring'];
    const option_four = ['90s', '2000s', '2010s', 'Just stay where I am'];
    const option_five = ['Clubbing', 'Kickback', 'Night in', 'Dinner and movie'];
    const option_seven = ['Simple and classic', 'Trendy and hipster', 'Casual and comfortable', 'Dress to impress'];
    const options = [option_one, option_two, option_three, option_four, option_five, option_seven];
    const num = ['0','1','2','3']
    let images = num.map(image => {
           return <img key={image} src={require(`../assets/img_survey_host/cards/${this.props.pageNum}/${image}.png`)} alt="" className="img-responsive" />
        });
    return (
      <Button className={classes.button} variant="contained" onClick={this.handleClick1.bind(this)} >
        <div className="but">
          {images[this.props.optNum]}
          {options[this.props.pageNum][this.props.optNum]}
        </div>
      </Button>
    );
  }
}

AnsBut.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AnsBut);
