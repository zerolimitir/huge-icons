import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMicMute = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.177 1.822a5.111 5.111 0 0 0-1.917.754c-.333.217-.916.742-1.142 1.026l-.113.143 4.499 4.498 4.498 4.497-.013-3.36c-.013-3.26-.016-3.37-.098-3.704-.513-2.088-2.108-3.559-4.199-3.873a6.205 6.205 0 0 0-1.515.019M2.7 2.097c-.357.159-.516.593-.358.974.042.103.769.858 2.358 2.449l2.297 2.3.015 3.32c.015 3.623.004 3.436.254 4.2a5.02 5.02 0 0 0 2.913 3.063 4.708 4.708 0 0 0 1.801.333c1.408.005 2.572-.482 3.585-1.499l.426-.427.794.795.794.795-.4.403a7.109 7.109 0 0 1-1.419 1.139 7.247 7.247 0 0 1-10.785-4.418c-.173-.681-.215-1.184-.215-2.578v-1.29l-.099-.198c-.145-.289-.326-.398-.661-.398-.316 0-.5.102-.648.359-.092.16-.092.168-.091 1.641.001 1.228.013 1.555.073 1.92.162.996.4 1.762.807 2.6a8.746 8.746 0 0 0 9.402 4.782 8.755 8.755 0 0 0 4.709-2.496l.391-.399.989.981c1.061 1.054 1.126 1.101 1.473 1.061.481-.054.793-.596.599-1.04C21.63 20.3 3.459 2.138 3.307 2.082a1.02 1.02 0 0 0-.607.015m17 8.979a.734.734 0 0 0-.398.413c-.052.123-.062.363-.062 1.42-.001 1.283-.028 1.718-.147 2.323-.077.394-.043.566.158.795.371.422 1.023.303 1.243-.227.07-.171.173-.761.225-1.3.021-.22.039-.958.039-1.64 0-1.121-.007-1.255-.074-1.4-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMicMute);
export default ForwardRef;