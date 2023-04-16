import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTrophy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.656 2.281a2.427 2.427 0 0 0-.869.263c-.705.348-1.252 1.013-1.441 1.75a1.572 1.572 0 0 1-.079.253c-.011.01-.093-.019-.182-.065-.405-.206-1.201-.274-1.735-.147-.96.228-1.765 1.023-2.011 1.985-.237.926.014 2.196.63 3.193.284.46.976 1.165 1.437 1.463.523.339 1.193.611 1.682.684.188.029.188.029.214.214a6.792 6.792 0 0 0 3.694 5.164 7.222 7.222 0 0 0 1.704.582l.45.084.09.018v2.513l-1.233.012-1.233.013-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.223.062 6.215.062 6.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.233-.013-1.233-.012v-2.513l.09-.018.45-.084a7.222 7.222 0 0 0 1.704-.582 6.792 6.792 0 0 0 3.694-5.164c.026-.185.026-.185.214-.214.489-.073 1.159-.345 1.682-.684.461-.298 1.153-1.003 1.437-1.463.617-.998.867-2.27.63-3.193-.25-.967-1.05-1.757-2.011-1.985-.534-.127-1.33-.059-1.735.147-.089.046-.171.075-.182.065a1.572 1.572 0 0 1-.079-.253 2.77 2.77 0 0 0-1.452-1.756c-.585-.289-.306-.273-5.042-.282-2.343-.004-4.37.007-4.504.025m8.881 1.596c.251.123.463.335.586.586l.097.197v3.52c0 3.216-.006 3.548-.071 3.848-.442 2.048-1.911 3.567-3.949 4.084-.384.098-.487.107-1.2.107-.717 0-.815-.009-1.211-.109a5.282 5.282 0 0 1-1.981-.948c-1.063-.802-1.826-2.116-2.006-3.455-.026-.197-.042-1.536-.042-3.625 0-3.597-.009-3.449.224-3.801.121-.183.373-.375.607-.461.124-.046.878-.054 4.449-.047l4.3.007.197.097m-12 2.001c.25.122.463.334.586.585l.097.197.011 1.75c.006.963.005 1.75-.003 1.75-.092 0-.669-.239-.887-.367-.364-.215-.919-.77-1.132-1.133a3.272 3.272 0 0 1-.437-1.436c-.026-.46.007-.613.198-.916.127-.202.371-.395.621-.489.232-.089.705-.059.946.059m16 0c.25.122.463.334.586.585.087.177.097.246.093.677-.003.428-.017.52-.13.854a3.048 3.048 0 0 1-.802 1.29c-.385.384-.756.624-1.202.775a6.318 6.318 0 0 1-.309.101c-.007 0-.013-.763-.013-1.695 0-1.835.001-1.847.224-2.184.121-.182.371-.373.607-.462.232-.089.705-.059.946.059'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrophy);
export default ForwardRef;