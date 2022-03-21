/** @noSelfInFile */
declare namespace jbox_display {
	interface Rectangle {
		left: number;
		top: number;
		bottom: number;
		right: number;
	}

	interface Color {
		r: number;
		g: number;
		b: number;
		a?: number;
	}

	interface DisplayInfo {
		width: number;
		height: number;
	}

	interface Point {
		x: number;
		y: number;
	}

	interface PopupMenuItem {
		name: string;
		checked?: boolean;
		disabled?: boolean;
		divider?: boolean;
		items?: PopupMenuItem[];
	}

	interface PopupMenuDefinition {
		on_menu: string;
		items: PopupMenuItem[];
	}

	interface GesturePoint extends Point {
		modifier_key1?: boolean;
		modifier_key2?: boolean;
		modifier_key3?: boolean;
	}

	interface GestureInfo {
		start_point: GesturePoint;
		current_point: GesturePoint;
	}

	interface CustomData {
		[key: string]: any;
	}

	interface GestureHandlerResult {
		gesture_ui_name?: jbox.UiText;
		property_changes?: PropertyValue[];
	}

	type on_tap = (
		property_values: PropertyValue[],
		display_info: DisplayInfo,
		gesture_info: GestureInfo,
		custom_data: CustomData
	) => GestureHandlerResult;

	type on_update = (
		property_values: PropertyValue[],
		display_info: DisplayInfo,
		gesture_info: GestureInfo,
		custom_data: CustomData
	) => GestureHandlerResult;

	type on_release = (
		property_values: PropertyValue[],
		display_info: DisplayInfo,
		gesture_info: GestureInfo,
		custom_data: CustomData
	) => GestureHandlerResult;

	type on_cancel = (
		property_values: PropertyValue[],
		display_info: DisplayInfo,
		gesture_info: GestureInfo,
		custom_data: CustomData
	) => GestureHandlerResult;

	interface GestureHandlers {
		on_tap?: string;
		on_update?: string;
		on_release?: string;
		on_cancel?: string;
	}

	interface GestureDefinition {
		custom_data?: CustomData;
		handlers?: GestureHandlers;
		popup_def?: PopupMenuDefinition;
	}

	type CapStyle = 'butt' | 'round' | 'square';
	type JoinStyle = 'bevel' | 'round' | 'miter';
	type ShapeClosed = 'open' | 'closed';
	type TextStyle = 'Small LCD font' | 'LCD font';
	type Alignment = 'left' | 'right' | 'center';

	function draw_text(
		rect: Rectangle,
		alignment: Alignment,
		text: string,
		text_style: TextStyle,
		color: Color): void;

	function draw_line(
		start: Point,
		end: Point,
		color: Color,
		thickness?: number,
		cap_style?: CapStyle
	): void;

	function draw_lines(
		points: Point[],
		color: Color,
		shape_closed: ShapeClosed,
		thickness: number,
		cap_style?: CapStyle,
		join_style?: JoinStyle
	): void;

	function draw_polygon(
		vertices: Point[],
		color: Color
	): void;

	function draw_rect(
		rect: Rectangle,
		color: Color
	): void;

	function invalidate(rect: Rectangle): void;

	type PropertyValue = any;

	type invalidate = (
		property_values: PropertyValue[],
		last_property_values: PropertyValue[],
		display_info: DisplayInfo
	) => void;

	type draw = (
		property_values: PropertyValue[],
		display_info: DisplayInfo,
		dirty_rect: Rectangle
	) => void;

	type recognize_gesture = (
		property_values: PropertyValue[],
		display_info: DisplayInfo,
		gesture_start_point: Point
	) => GestureDefinition;

}
