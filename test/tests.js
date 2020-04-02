import checkResults from '../check-result.js';
const test = QUnit.test

test ('checkResults', (assert) => {
    //Arrange
    const expected1 = 'win';
    const expected2 = 'lose';
    const expected3 = 'draw';
    const expected4 = 'win';
    const expected5 = 'lose';
    const expected6 = 'draw';
    const expected7 = 'win';
    const expected8 = 'lose';
    const expected9 = 'draw';

    //Act
    const result1 = checkResults('rock', 'scissors');
    const result2 = checkResults('rock', 'paper');
    const result3 = checkResults('rock', 'rock');
    const result4 = checkResults('scissors', 'paper');
    const result5 = checkResults('scissors', 'rock');
    const result6 = checkResults('scissors', 'scissors');
    const result7 = checkResults('paper', 'rock');
    const result8 = checkResults('paper', 'scissors');
    const result9 = checkResults('paper', 'paper');
    //Assert

    assert.equal(expected1, result1);
    assert.equal(expected2, result2);
    assert.equal(expected3, result3);
    assert.equal(expected4, result4);
    assert.equal(expected5, result5);
    assert.equal(expected6, result6);
    assert.equal(expected7, result7);
    assert.equal(expected8, result8);
    assert.equal(expected9, result9);
});

