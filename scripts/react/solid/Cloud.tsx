import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloud = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.28 5.044c-3.589.404-6.273 3.372-6.279 6.944-.006 3.278 2.311 6.161 5.505 6.85.741.16.988.167 5.674.152 4.992-.015 4.663.001 5.455-.273 2.062-.714 3.446-2.735 3.352-4.897-.101-2.339-1.708-4.223-4.029-4.724-.251-.055-.502-.073-.978-.071-.61.001-.92.044-1.446.197-.076.022-.113-.028-.331-.448-1.315-2.538-4.114-4.046-6.923-3.73'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloud);
export default ForwardRef;
