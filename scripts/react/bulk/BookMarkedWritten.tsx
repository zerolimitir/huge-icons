import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBookMarkedWritten = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.7 5.316a.745.745 0 0 0 .029 1.382c.131.055.64.062 4.28.061 3.931-.001 4.139-.004 4.291-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.152-.071-.359-.074-4.3-.074s-4.148.003-4.3.074m.149 3.442c-.373.091-.635.44-.6.8a.745.745 0 0 0 .384.592l.187.11h4.366l.194-.12c.502-.311.502-.969 0-1.28l-.194-.12-2.103-.007c-1.157-.003-2.162.008-2.234.025M6.38 13.059c-1.62.357-2.649 1.921-2.318 3.522a2.993 2.993 0 0 0 2.357 2.357C6.678 18.992 7.4 19 12 19c5.777 0 5.556.008 6.15-.233a3.08 3.08 0 0 0 1.617-1.617c.216-.53.233-.718.233-2.508V13l-6.69.003c-5.392.003-6.737.014-6.93.056'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookMarkedWritten);
export default ForwardRef;
