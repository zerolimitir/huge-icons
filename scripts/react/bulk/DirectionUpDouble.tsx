import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDirectionUpDouble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 12.278c-.163.04.016-.098-2.911 2.245-1.596 1.277-2.508 2.033-2.559 2.121a.774.774 0 0 0 .027.745c.197.298.544.429.853.322.103-.035.987-.717 2.47-1.903L12 13.959l2.304 1.845c1.268 1.014 2.365 1.869 2.439 1.9.363.151.792-.043.955-.433a.673.673 0 0 0-.016-.579c-.065-.144-.44-.458-2.675-2.246a197.477 197.477 0 0 0-2.673-2.118c-.114-.06-.379-.085-.523-.05'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionUpDouble);
export default ForwardRef;
