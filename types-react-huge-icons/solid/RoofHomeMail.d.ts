import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
