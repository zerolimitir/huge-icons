import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTrackNext = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.811 6.278a.883.883 0 0 0-.481.374c-.063.116-.071.303-.082 1.934l-.011 1.806-3.049-1.78a286.297 286.297 0 0 0-3.279-1.897 1.871 1.871 0 0 0-1.033-.222c-.902.069-1.652.715-1.832 1.579-.062.297-.062 7.559 0 7.856.077.369.266.709.552.995a1.97 1.97 0 0 0 2.052.483c.182-.064 5.855-3.332 6.442-3.71l.15-.097v1.73c0 1.14.016 1.785.045 1.89a.84.84 0 0 0 .191.306.743.743 0 0 0 1.244-.323c.028-.105.038-1.824.031-5.288-.011-5.092-.012-5.135-.093-5.273a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackNext);
export default ForwardRef;
