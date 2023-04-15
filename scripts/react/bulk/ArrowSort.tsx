import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowSort = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.9 5.259a1.795 1.795 0 0 1-.16.04c-.151.034-3.263 3.118-3.387 3.358a.77.77 0 0 0 .062.759c.211.278.624.386.917.24.07-.035.529-.462 1.018-.95l.89-.885v5.119c0 3.612.013 5.167.045 5.279.059.213.293.441.513.5.4.108.812-.12.92-.51.028-.099.042-1.87.042-5.269V7.821l.89.885c.489.488.948.915 1.018.95.254.127.673.048.857-.162a.78.78 0 0 0 .118-.846c-.079-.152-3.159-3.247-3.303-3.319-.091-.045-.38-.092-.44-.07'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowSort);
export default ForwardRef;
