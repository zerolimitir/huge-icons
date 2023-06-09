import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 4.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v9.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.394.08.523.083 4.163.083 4.125 0 3.956.01 4.26-.241.079-.065.186-.204.237-.309.088-.177.096-.254.12-1.13.031-1.087.086-1.383.37-1.983.232-.489.459-.818.801-1.16a4.263 4.263 0 0 1 1.865-1.062c.318-.083.452-.089 2.278-.111 1.93-.024 1.941-.024 2.13-.118.105-.051.244-.158.31-.238.249-.303.244-.228.231-3.393l-.012-2.875-.106-.385a4.03 4.03 0 0 0-1.604-2.283 5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028m.907 3.023c.369.126.66.538.66.934 0 .527-.473 1-1 1-.242 0-.521-.119-.701-.299A.984.984 0 0 1 5.3 7.298a.977.977 0 0 1 1.04-.232m6.043 2.977c.802.147 1.456.829 1.584 1.652C14.153 12.894 13.209 14 12 14a2.016 2.016 0 0 1-1.967-1.695c-.1-.642.099-1.244.563-1.709.489-.488 1.102-.678 1.787-.553m4.917 5.331a1.51 1.51 0 0 0-1.096 1.015c-.156.463-.084.987.19 1.38.066.094.512.561.993 1.039 1 .994 1.139 1.088 1.617 1.088.478.001.632-.107 1.7-1.184 1.058-1.067 1.135-1.181 1.167-1.715.042-.697-.291-1.248-.934-1.544-.203-.094-.289-.109-.597-.109-.457.001-.702.092-1.07.398l-.27.224-.27-.224a2.172 2.172 0 0 0-.489-.306c-.277-.103-.68-.13-.941-.062'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyFavourite);
export default ForwardRef;
