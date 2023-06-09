import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCardDash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 2.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.444-.056 10.652 0 11.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.446.056 12.65.056 13.096 0 1.124-.141 1.971-.56 2.791-1.38.82-.82 1.239-1.667 1.38-2.791.056-.444.056-10.652 0-11.096a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.477-.047-12.482-.045-12.963.002m13.501 1.628c.541.188.892.408 1.29.805.376.377.604.73.771 1.196.058.161.105.301.105.31 0 .01-4.123.018-9.163.018H2.835l.027-.09c.095-.315.272-.7.431-.94a3.903 3.903 0 0 1 1.018-.985 3.923 3.923 0 0 1 1.102-.422c.114-.019 3.132-.032 6.707-.029l6.5.006.374.131M21.24 9v1.24H2.76V7.76h18.48V9m-.008 5.69-.012 2.93-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H5.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 18l-.132-.38-.012-2.93-.011-2.93h18.486l-.011 2.93M5.807 16.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.271.058 2.053.058 2.324 0 .758-.163.758-1.269 0-1.432-.253-.054-2.109-.052-2.355.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardDash);
export default ForwardRef;
