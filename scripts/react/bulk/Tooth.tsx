import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTooth = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.52 2.881c-1.003.096-1.934.557-2.803 1.387-1.873 1.789-2.224 4.83-.996 8.633.834 2.585 2.437 5.377 3.96 6.899.468.468.809.729 1.195.913.246.118.339.141.55.139.724-.006 1.165-.595 1.416-1.888.045-.233.152-.985.239-1.672.221-1.761.383-2.476.679-2.991.259-.453.638-.74 1.062-.803l.178-.027V4.68l-.11-.001c-.208-.001-.664-.118-.906-.232a7.454 7.454 0 0 1-.684-.404c-1.316-.865-2.638-1.271-3.78-1.162'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTooth);
export default ForwardRef;
