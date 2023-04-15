import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSignpost = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.24 2.036c-.308.098-.589.356-.685.629-.082.231-.082 18.439 0 18.67.077.217.309.461.545.571.186.086.25.093.9.093s.714-.007.9-.093c.236-.11.468-.354.545-.571.082-.231.082-18.439 0-18.67-.07-.198-.293-.446-.502-.558-.148-.079-.229-.088-.883-.095-.396-.005-.765.006-.82.024M5.108 6.058c-.265.094-.429.238-1.481 1.297-1.11 1.117-1.199 1.238-1.204 1.625-.006.407.038.465 1.327 1.745.995.987 1.217 1.189 1.355 1.228.116.033.781.047 2.29.047H9.52V6l-2.13.002c-1.688.001-2.162.013-2.282.056M14.48 15v3h4.54l1.5-1.5 1.5-1.5-1.5-1.5-1.5-1.5h-4.54v3'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpost);
export default ForwardRef;
