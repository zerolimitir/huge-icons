import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSignpostSmall = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.24 2.036c-.308.098-.589.356-.685.629-.082.231-.082 18.439 0 18.67.077.217.309.461.545.571.186.086.25.093.9.093s.714-.007.9-.093c.236-.11.468-.354.545-.571.082-.231.082-18.439 0-18.67-.07-.198-.293-.446-.502-.558-.148-.079-.229-.088-.883-.095-.396-.005-.765.006-.82.024M3.02 6l-.999 1 .999 1 .999 1H9.52V5H4.019L3.02 6m11.46 5v2h5.541l.999-1 .999-1-.999-1-.999-1H14.48v2M3.02 14l-.999 1 .999 1 .999 1H9.52v-4H4.019l-.999 1'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpostSmall);
export default ForwardRef;
