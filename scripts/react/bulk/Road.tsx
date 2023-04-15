import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoad = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 6.316c-.384.177-.46.374-.459 1.193.001.684.04.852.244 1.039a.746.746 0 0 0 1.199-.248c.062-.134.074-.262.074-.8s-.012-.666-.074-.8c-.181-.392-.607-.558-.984-.384m.149 4.445a.825.825 0 0 0-.524.409c-.076.157-.085.244-.085.836 0 .615.006.674.093.838a.755.755 0 0 0 1.334 0c.087-.164.093-.222.093-.844s-.006-.68-.093-.844c-.152-.287-.516-.463-.818-.395m-.149 4.555c-.384.177-.46.374-.459 1.193.001.684.04.852.244 1.039a.746.746 0 0 0 1.199-.248c.062-.134.074-.262.074-.8s-.012-.666-.074-.8c-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoad);
export default ForwardRef;
