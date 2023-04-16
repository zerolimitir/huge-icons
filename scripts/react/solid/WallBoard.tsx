import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWallBoard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.817 1.277a.833.833 0 0 0-.18.065c-.032.019-1.299 1.071-2.817 2.337L6.06 5.98l-.78.024c-.877.026-1.03.056-1.54.294-.896.419-1.473 1.15-1.68 2.127-.09.424-.088 10.721.002 11.156a2.993 2.993 0 0 0 2.357 2.357C4.68 21.993 5.6 22 12 22c7.974 0 7.547.012 8.15-.233a3.08 3.08 0 0 0 1.617-1.617c.241-.594.233-.373.233-6.15 0-5.779.008-5.556-.234-6.151a2.963 2.963 0 0 0-1.506-1.551c-.51-.238-.663-.268-1.54-.294l-.78-.024-2.766-2.306c-1.521-1.269-2.799-2.324-2.84-2.346-.112-.059-.379-.085-.517-.051m2.002 3.213 1.792 1.49-1.806.01c-.993.006-2.615.006-3.605 0l-1.801-.01 1.789-1.49c.984-.82 1.8-1.49 1.813-1.49.014 0 .832.67 1.818 1.49m3.554 4.865c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.138.082-.17.082-5.359.082s-5.221 0-5.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.054-1.014.431-1.131.069-.017 2.438-.028 5.265-.024l5.14.006.153.095m0 4c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.138.082-.17.082-5.359.082s-5.221 0-5.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.054-1.014.431-1.131.069-.017 2.438-.028 5.265-.024l5.14.006.153.095m-4.985 4.012a.7.7 0 0 1 .345.64c0 .196-.019.264-.117.402-.064.092-.18.204-.257.249-.136.08-.19.082-2.859.082s-2.723-.002-2.859-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.055-1.013.431-1.132.069-.016 1.314-.027 2.768-.024l2.643.007.162.107'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWallBoard);
export default ForwardRef;