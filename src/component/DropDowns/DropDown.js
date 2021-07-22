import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
    marginLeft: "250px",
    marginTop: "50px",
  },
}));

export default function GroupedSelect() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Protine</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          <optgroup label="Pick Your Protine">
            <option value={1}>Chicken</option>
            <option value={2}>Cow</option>
            <option value={3}>Pig</option>
            <option value={4}>Lamb</option>
            <option value={4}>Fish</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select" id="demo-mutiple-checkbox">Veggies</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          <optgroup label="Pick Your Veggies">
            <option value={1}>Lettus</option>
            <option value={2}>Broccoli</option>
            <option value={3}>Carrots</option>
            <option value={4}>Pees</option>
            <option value={5}>Corn</option>
            <option value={6}>Garlic</option>
            <option value={7}>Kale</option>
            <option value={8}>Beans</option>

          </optgroup>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Starch</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          <optgroup label="Pick Your Protine">
            <option value={1}>Potato</option>
            <option value={2}>Pasta</option>
            <option value={3}>Rice</option>
            <option value={4}>Bread</option>
            <option value={5}>Pasta</option>
            <option value={6}>Noodles</option>


          </optgroup>
        </Select>
      </FormControl>
    </div>
  );
}