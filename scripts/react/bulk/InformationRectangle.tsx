import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgInformationRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 7.316c-.384.177-.46.374-.459 1.193.001.684.04.852.244 1.039a.746.746 0 0 0 1.199-.248c.062-.134.074-.262.074-.8s-.012-.666-.074-.8c-.181-.392-.607-.558-.984-.384m.149 3.445a.825.825 0 0 0-.524.409c-.084.173-.085.21-.084 2.573.001 2.245.005 2.407.075 2.557a.743.743 0 0 0 1.368 0c.07-.15.074-.312.075-2.564l.001-2.403-.093-.177c-.152-.287-.516-.463-.818-.395'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInformationRectangle);
export default ForwardRef;
