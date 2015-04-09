

function f_to_k() {
    var fahrenheit = parseFloat($('#input').val());
    var kelvin;
        kelvin = (fahrenheit + 459.67) * (5/9);
    $('#kelvin').html("" + fahrenheit + " degrees F" + " is " + kelvin + " degrees K.");
    }


$('#f_to_k').click(f_to_k);

function fibonacci() {
    var spot = parseInt($('#input').val());
    var i = 0;
    var fib_num = 1;
    var fib_num_a = [1,1];
    while (i < spot) {
        if (i < 1) {
            i+=1;
        } else {
            fib_num += fib_num_a[i-1];
            fib_num_a.push(fib_num);
            i += 1;
        }
    }

    $('#output_fib').html("The " + spot + "th number of the Fibonacci sequence is " + fib_num_a[spot-1] + ".");
}

$('#fibonacci').click(fibonacci);

function factorial() {
    var number = parseInt($('#input').val());
    var i = 0;
    var output_factorial = 1;
    while (i < number) {
        i += 1;
        output_factorial = output_factorial * i;
    }

    if (number == 0) {
        $("#output_factorial").html("Please enter a number greater than 0.");
    } else {
        $("#output_factorial").html("The factorial of " + number + " is " + output_factorial + ".")
    }

}

$('#factorial').click(factorial);