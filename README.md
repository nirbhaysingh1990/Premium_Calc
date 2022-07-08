# Premium_Calc
Insurance premium calculator

Assumptions:
These fields are require:
Name(Required field)
Age(Will be disabled and will be calculated based on the date of birth selected. If calculated age is less than one year, age will be considered as one year.)
Date of Birth(Required field. This field will show a calendar control to allow user to select birth date. Calendar will allow user to select a date till current date, assuming birth date can not be a future date.)
Occupation(Required field)
Death – Sum Insured.(Required field)


By default all the mandatory fields will be empty and so a required filed message.
> Once user will enter value in the fields the required error message will disappear.
> Submit button will only be enabled when no required field is empty.
>Once user will enter name, Sum Insured and select DOB, and Occupation.
>Submit button will be enabled.
>On click of Submit button the calculated premium will be shown in Premium field.
>On selection of DOB age will be automatically calculated.
>On change of occupation premium will be recalculated only when all the required fields are not empty.

This app is developed using Angular 12. It has single page which is having a form control with different input fields.
We are using Validator for validating the form for required fields.
Bootstrap used in this page is version 5.x.
Classes used :
OccupationRating : It is an enum which has diferent ratings for each occupation.
Occupation: It is a class having name of occupation and occupation rating.

PremCalc component has a list of available occupation which is binded in the form with Occupation control.
Premium calculation is getting triggerd on ngModelChange event of Occupation dropdown and also on submit button control.
Age is getting calculated based on the selected date in date of birth control.
Age calculation is getting triggered on ngModelcahnge event of date control.



Footer
