# (week 1  code challange)

#### Date, 2024,29,09

#### By *EMMACULATE MWIKALI*

## Description
# Student Grading Script

This JavaScript program evaluates a student's mark and assigns a corresponding grade based on predefined criteria. It demonstrates the use of conditional statements to categorize marks into grades.

## Code Overview

The script takes a fixed student mark (currently set to `90`) and determines the grade based on the following criteria:

- **E**: Marks from `1` to `40`
- **D**: Marks from `40` to `49`
- **C**: Marks from `50` to `59`
- **B**: Marks from `60` to `69`
- **A**: Marks from `70` to `100`
- **INVALID INPUT**: Marks less than `1` or greater than `100`

## Code Explanation

// Initialize the mark variable
let mark = 90; // Set the student's mark to 90

// Determine the grade based on the mark
* if (mark > 0 && mark <= 40) {
*    console.log("E"); // Grade E for marks between 1 and 40
* } else if (mark >= 40 && mark <= 49) {
    console.log("D"); // Grade D for marks between 40 and 49
* } else if (mark >= 50 && mark <= 59) {
*   console.log("C"); // Grade C for marks between 50 and 59
* } else if (mark >= 60 && mark <= 69) {
*    console.log("B"); // Grade B for marks between 60 and 69
* } else if (mark >= 70 && mark <= 100) {
*    console.log("A"); // Grade A for marks between 70 and 100
* } else {
*    console.log("INVALID INPUT"); // Output for invalid marks (less than 1 or greater than 100)
* }

# Speed Detector

This Speed Detector program calculates demerit points for drivers based on their speed relative to a defined speed limit of 70 km/h. The program awards points for exceeding the speed limit, with each 5 km/h over the limit resulting in 1 demerit point.

## Features

- **Speed Limit Check**: Validates the driver's speed against the set speed limit.
- **Demerit Points Calculation**: Computes the number of demerit points based on excess speed.
- **Output Messages**: Returns appropriate feedback based on the driver's speed:
  - "OK" for speeds within the limit.
  - Number of demerit points for minor excess speeds.
  - "License suspended" for drivers accumulating 12 or more demerit points.

## Usage

To use the Speed Detector, simply call the `calculateDemeritPoints(speed)` function with the driver's speed as an argument:

*console.log(calculateDemeritPoints(65));  // Output: OK
*console.log(calculateDemeritPoints(80));  // Output: Points: 2
*console.log(calculateDemeritPoints(95));  // Output: Points: 5
*console.log(calculateDemeritPoints(140)); // Output: License suspended


### Net Salary calculation System
This project implements a salary calculation system that computes the net salary of an employee based on their basic salary and benefits. The calculation includes deductions for:

- **PAYE (Pay As You Earn) Tax**: A progressive tax based on the employee's taxable income.
- **NHIF (National Hospital Insurance Fund)**: A mandatory health insurance contribution.
- **NSSF (National Social Security Fund)**: A pension contribution capped at a maximum salary.
- **Housing Levy**: A levy calculated as a percentage of the gross salary.

The system is designed according to the latest tax regulations effective from July 1, 2023, in Kenya. 

### Features

- **Dynamic PAYE Calculation**: Computes the PAYE tax based on predefined income brackets.
- **NHIF and NSSF Deductions**: Automatically calculates the mandatory contributions based on gross salary.
- **Housing Levy Calculation**: Computes the housing levy at 1.5% of the gross salary.
- **Comprehensive Salary Breakdown**: Provides detailed information on gross salary, taxable income, deductions, and net salary.

## Functions

### `calculatePAYE(taxableIncome)`

Calculates the PAYE tax based on the employee's taxable income and the current tax brackets.

### `calculateNHIF(grossSalary)`

Calculates the NHIF deduction based on the employee's gross salary according to the NHIF rates in effect.

### `calculateNSSF(grossSalary)`

Calculates the NSSF contribution as 6% of the gross salary, capped at a maximum of 18,000 Ksh.

### `calculateHousingLevy(grossSalary)`

Calculates the housing levy, which is 1.5% of the employee's gross salary.

### `calculateNetSalary(basicSalary, benefits)`

Calculates the net salary by:
1. Summing the basic salary and benefits to get the gross salary.
2. Calculating NSSF, NHIF, PAYE, and housing levy deductions.
3. Returning a breakdown of the salary, including gross salary, taxable income, deductions, and net salary.

## for insance :

To calculate the salary breakdown for an employee with a basic salary of 50,000 Ksh and benefits of 5,000 Ksh:

*const basicSalary = 50000;  // Basic salary
*const benefits = 5000;      // Additional benefits

*const salaryBreakdown = calculateNetSalary(basicSalary, benefits);
*console.log("Gross Salary:", salaryBreakdown.grossSalary);
*console.log("Taxable Income:", salaryBreakdown.taxableIncome);
*console.log("PAYE (Tax):", salaryBreakdown.payee);
*console.log("NHIF Deduction:", salaryBreakdown.nhifDeduction);
*console.log("NSSF Deduction:", salaryBreakdown.nssfDeduction);
*console.log("Housing Levy:", salaryBreakdown.housingLevy);
*console.log("Net Salary:", salaryBreakdown.netSalary);

# Live Link
* You can view the web live on (https://github.com/EMMA-KAREN/EMMA-WK1C.C)]


## Technologies used
Github
Javascript

## Support and contact details
Contact details (mumokaren@gmail.com, 079792951, )

### License
The content of this site is licensed under the MIT license
(https://github.com/EMMA-KAREN/EMMA-WK1C.C/blob/master/licence.md)



















