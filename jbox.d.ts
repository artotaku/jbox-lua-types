/** @noSelfInFile */
declare namespace jbox {

	interface SampleInfo {
		frame_count: number;
		resident_count: number;
		channels: number;
		sample_rate: number;
		state: number;
		name: string;
	}
	interface SampleMetaData {
		frame_count: number;
		resident_frame_count: number;
		channels: number;
		sample_rate: number;
		load_status: string;
		sample_name: string;
		root_key: number;
		tune_cents: number;
		play_range_start: number;
		play_range_end: number;
		loop_range_start: number;
		loop_range_end: number;
		loop_mode: string;
	}

	type SampleRef = unknown;
	type UiText = unknown;

	function trace(message: string): void;
	function ui_text(text: string): UiText;
	function get_sample_meta_data(sample: SampleRef): SampleMetaData;
	function format_integer_as_string(value: number): string;
	function format_number_as_string(value: number, decimals: number): string;
	function format_note_length_value_as_string(numerator: number, denominator: number, isTriplet: boolean): string;
	function expand_template_string(template: UiText, ...uiText: UiText[]): UiText;
	function value_as_string(property_index: number, value: any): string;

}