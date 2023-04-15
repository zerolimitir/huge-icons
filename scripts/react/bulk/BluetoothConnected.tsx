import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBluetoothConnected = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='m4.88 11.3-.699.7.699.7.699.7.711-.71.71-.709-.69-.691c-.379-.379-.699-.69-.71-.69-.011 0-.335.315-.72.7m12.827-.023c-.367.372-.667.692-.667.71 0 .019.311.344.69.723l.691.69.699-.7.699-.7-.699-.7c-.385-.385-.71-.7-.723-.7-.013 0-.324.305-.69.677'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBluetoothConnected);
export default ForwardRef;
